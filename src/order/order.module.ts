import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { OrderController } from './order.controller';
import { ORDER_PACKAGE_NAME, ORDER_SERVICE_NAME } from './order.pb';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ClientsModule.register([
      {
        name: ORDER_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          url: `${process.env.MSA_HOST}:${process.env.ORDER_PORT}`,
          package: ORDER_PACKAGE_NAME,
          protoPath: 'node_modules/grpc-nest-proto/proto/order.proto',
        },
      },
    ]),
  ],
  controllers: [OrderController],
})
export class OrderModule {}
