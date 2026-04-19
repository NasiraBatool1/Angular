export interface Products {
  id?: string;
  name?: string;
  price?: number;
  category?: string;
  quantity?: number;
 // qr?: string;
  createdAt?: any; // Firestore Timestamp or Date
  cost?: number;
}
