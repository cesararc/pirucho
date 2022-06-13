import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Coupon, CouponDocument } from '../entities/coupon.schemas';
import { Model } from 'mongoose';

@Injectable()
export class CouponService {
  constructor(
    @InjectModel(Coupon.name) private couponModel: Model<CouponDocument>,
  ) {}

  async create(category: Coupon): Promise<Coupon> {
    const coupon = new this.couponModel(category);
    return await coupon.save();
  }

  async findAll(): Promise<Coupon[]> {
    return await this.couponModel.find().exec();
  }

  async findOne(id: string): Promise<Coupon> {
    return await this.couponModel.findById(id).exec();
  }

  async update(id: string, category: Coupon) {
    return await this.couponModel.findByIdAndUpdate(id, category, {
      new: true,
    });
  }

  async remove(id: string) {
    return await this.couponModel.findByIdAndRemove(id);
  }
}
