import { FoodGroup } from "./FoodGroup";
import { QuantityType } from "./QuantityType";

export interface Ingredients {
  Id: number,
  Name: string,
  Group_id: FoodGroup,
  Quantity: number,
  QuantityType_id: QuantityType,
  ExpirationDate: Date
}
