import { Component,inject,OnInit } from '@angular/core';
import { Products } from '../../interface/products';
import { Firestore,collection,collectionData,setDoc,deleteDoc,doc,getDoc, CollectionReference,
  updateDoc} from '@angular/fire/firestore';
import { getDocs } from 'firebase/firestore';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  firestore: Firestore=inject(Firestore);
  collectionRef: CollectionReference;
  products: Products = {
    name: '',
    category: '',
    price: 0,
    qr: '',
    quantity: 0
  };
  Products: Products[] = []
  selectedProducts : Products = {};
  constructor() {
    this.collectionRef= collection(this.firestore, "products")
}
SelectedProducts (p : Products){
  this.selectedProducts  = p
}
async UpdateProducts(){
  const id = this.selectedProducts.id || ' '
  await updateDoc(doc(this.firestore, 'products' , id) , { ... this.selectedProducts})
  alert("Products updated")
  this.ReadProducts()
}

async AddProducts() {
  const productsDocument = doc(this.collectionRef)
  await setDoc(productsDocument, this.products)
  alert("Product Added")
  this.ReadProducts()
}
async ReadProducts(){
  this.Products = (await getDocs(this.collectionRef)).docs.map(item=>{
      return {id : item.id, ...item.data()}
  })
}
async DeleteProducts(id : string = ''){
  await deleteDoc(doc(this.firestore,"products",id))
  this.ReadProducts()
}

ngOnInit(): void {
  this.ReadProducts()
}
}
