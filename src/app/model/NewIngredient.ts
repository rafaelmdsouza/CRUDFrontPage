import { FoodGroup } from './FoodGroup';
import { QuantityType } from './QuantityType';
export interface NewIngredient {
  Name: string,
  Quantity: number,
  ExpirationDate: Date,
  GroupId_id: FoodGroup,
  QuantityTypeId_id: QuantityType
}
