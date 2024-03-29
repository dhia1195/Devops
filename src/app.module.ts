import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ReclamationModule } from 'src/reclamation/reclamation.module';
import { OffreModule } from './offre/offre.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/pidev'),
    UserModule,
    ReclamationModule,
    OffreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
