import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { join } from "path";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

export class TypeOrmConfigService implements TypeOrmOptionsFactory{
    createTypeOrmOptions(): TypeOrmModuleOptions{
        return{
            database:'connect-world',
            username:'postgres',
            password:'dn132429',
            host:'localhost',
            port:5432,
            synchronize:true,
            type:'postgres',
            entities:[join(__dirname,'..','**/*entity.{ts,js}')],
            migrations:[join(__dirname,'..','./database/migrations/*{ts,js}')],
            namingStrategy: new SnakeNamingStrategy()
        }
    }
}