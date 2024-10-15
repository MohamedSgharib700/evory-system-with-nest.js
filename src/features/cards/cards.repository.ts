import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { Card } from './entities/card.entity';

@Injectable()
export class CardsRepository {
  constructor(
    @InjectModel(Card)
    private cardModel: typeof Card,
  ) {}

  async create(data:Partial<Card> ) : Promise<Card> {
    return await this.cardModel.create(data);
  }
 
 
  async findAll() {
    return await this.cardModel.findAll();
  }
 
  async findOne(id: string) {
    return await this.cardModel.findOne({
      where: { id: id },
    });
  }
 
  async update(id: string, updateData: Partial<Card>): Promise<[any, Card[]]> {
    return this.cardModel.update(updateData, {
      where: { id },
      returning: true,
    });
  }
 
  async remove(id: string) {
    await this.cardModel.destroy({
      where: { id: id },
    });
  }
}
