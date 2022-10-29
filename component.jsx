import React,{useState} from "react";
import ComponentInput from "./componentInput";
import "./component.css";

function Component(){

    const[content1,setContent1]=useState("");

    const onChange1 = (e)=>{
        setContent1(e.target.value);
    }

    const[content2,setContent2]=useState("");

    const onChange2 = (e)=>{
        setContent2(e.target.value);
    }

    const[content3,setContent3]=useState("");

    const onChange3 = (e)=>{
        setContent3(e.target.value);
    }

    const[content4,setContent4]=useState("");

    const onChange4 = (e)=>{
        setContent4(e.target.value);
    }

    return(
        <div>
            <ComponentInput
                title="경고"
                contentChange={onChange1}
                setContent1={setContent1}
                cont={content1}
                id="1"
                placeholder="경고를 입력하세요."
                color="red"
            />
            <ComponentInput
                title="인사말"
                contentChange={onChange2}
                setContent1={setContent2}
                cont={content2}
                id="2"
                placeholder="인사말을 입력하세요."
                color="skyblue"
            />
            <ComponentInput
                title="오류"
                contentChange={onChange3}
                setContent1={setContent3}
                cont={content3}
                id="3"
                placeholder="경고를 입력하세요."
                color="orange"
            />
            <ComponentInput
                title="공지사항"
                contentChange={onChange4}
                setContent1={setContent4}
                cont={content4}
                id="4"
                placeholder="공지사항을 입력하세요."
                color="green"
            />
        </div>
    );
}

export default Component;