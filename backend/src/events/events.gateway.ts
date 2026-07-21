import { WebSocketGateway,WebSocketServer, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage } from "@nestjs/websockets";
import { Server, Socket } from 'socket.io'
import { JwtService } from "@nestjs/jwt";
import { PayloadDTO } from "./dto/payload..dto";

@WebSocketGateway({cors:{
    origin:process.env.FRONTEND_URL?.split(','),
    credentials:true
}})

export class EventsGateway implements OnGatewayConnection, OnGatewayDisconnect{

    @WebSocketServer()
    server!:Server

    private onlineUsers = new Map<string,string>
    constructor (private readonly jwtService:JwtService){}
    

    handleConnection(client: Socket) {

        const token = client.handshake.auth.token

        if(!token){
            client.disconnect(true)
            
        }

        try{
            const payload = this.jwtService.verify(token)
            client.data.user = {
                sub:payload.sub,
                email:payload.email
            }
            this.onlineUsers.set(payload.sub,client.id)
            console.log(`User with id ${payload.sub} connected with client id ${client.id}`)
            return
         }catch(error){
            client.disconnect(true)
            
        }


        
    }

    handleDisconnect(client: Socket) {
        if(client.data.user){

            const userId = client.data.user.sub
            this.onlineUsers.delete(client.data.user.sub);
            console.log(`User with id ${userId} and client id ${client.id} disconnected`)
        }
        
    }

    @SubscribeMessage('message')
    handleMessage(client:Socket, payload:PayloadDTO){
        const receiverSocketId = this.onlineUsers.get(payload.receiver.sub)
    
        
        if(receiverSocketId){

            this.server.to(receiverSocketId).emit('message',{
                message:payload.message,
                receiver:payload.receiver,
                sender:client.data.user

            })
        }
    
    }


}