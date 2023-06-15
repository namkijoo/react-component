# react-component,props활용하기
사용할 컴포넌트 import하기
```jsx
import ComponentInput from "./componentInput";
```
<br/>

넘겨줄 값들을 key,value형태로 작성
```jsx
<ComponentInput
      title="경고"
      contentChange={onChange1}
      setContent1={setContent1}
      cont={content1}
      id="1"
      placeholder="경고를 입력하세요."
      color="red"
/>
```
<br/>
props로 넘겨준 값들 받아와 사용하기

```jsx
function ComponentInput(props)
```


```jsx
<input
  type="text"
   key={props.id}
   value={props.cont}
   placeholder={props.placeholder}
   onChange={handleChange}/> {
   props.id === "1" || props.id === "4"
       ? <button onClick={alerting}>클릭</button>
      : null
}/>
```
