import { useState } from "react"
import {v4 as uuid} from "uuid"
import ShoppingListForm from "./ShoppingListForm"
import ValidatedShoppingListForm from "./ValidatedShoppingListForm"

function ShoppingList(){
  //state 배열안의 객체들로 초기값 설정.
  const [items, setItems] = useState([
  ])


  // 목록에 아이템을 추가할 함수 정의
  // 인자로 추가할 item 들을 받음.
  // setItems를 통해 새로운 설정 => 현재의 배열을 가져와서
  // ...currItems 라는 현재배열의 객체들과 , 아이템을 추가한 것을 합쳐서 리턴
  const addItem = (item) =>{
      setItems(currItems =>{
      return [...currItems, {...item, id:uuid()}]
    })
  }

  
  return(
    //items.map 을 이용해 배열의 객체들을 각각 순회하며 접근
    // 후에 li 안에 객체의 키 , 값 렌더링 
    <div>
      <h1>ShoppingList</h1>
      <ul>
        {items.map((i)=> <li key={i.id}>{i.product} - {i.quantity}</li> )}
      </ul>
      <ShoppingListForm addItem={addItem}/>
    </div>
  )
}

export default ShoppingList