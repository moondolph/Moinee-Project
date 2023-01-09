import React, { useEffect, useState } from 'react'


export default function CreateRoom() {
  /* 기능 박는 부분
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };
  const handlePw = (e) => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };
  */
  return (
    <div className="page container border border-light border-3 text-bg-info bg-opacity-50">

      <div className="contentWrap ">
        <h1>방 생성 <span class="badge bg-secondary">New</span></h1>


        <div className="inputTitle">🔖제목</div>
        <div class="input-group mb-3">
          <input type="text" placeholder="제목을 입력하세요" class="form-control"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
        </div>


        <div className="inputTitle">✉️태그</div>
        <div className="inputWrap">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
            <label class="form-check-label" for="inlineCheckbox1">1</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
            <label class="form-check-label" for="inlineCheckbox2">2</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option3"></input>
            <label class="form-check-label" for="inlineCheckbox2">3</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option4"></input>
            <label class="form-check-label" for="inlineCheckbox2">4</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option5"></input>
            <label class="form-check-label" for="inlineCheckbox2">5</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value=""></input>
            <label class="form-check-label" for="inlineCheckbox2">6</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value=""></input>
            <label class="form-check-label" for="inlineCheckbox2">7</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value=""></input>
            <label class="form-check-label" for="inlineCheckbox2">8</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value=""></input>
            <label class="form-check-label" for="inlineCheckbox2">9</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value=""></input>
            <label class="form-check-label" for="inlineCheckbox2">10</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option6" disabled></input>
            <label class="form-check-label" for="inlineCheckbox3">11 (disabled)</label>
          </div>
        </div>

        <div className="inputTitle">🗓️모임날짜</div>
        <div className="inputWrap">
          <input
            className="date"
            type="date"
          />
        </div>

        <div className="inputTitle">🏢장소</div>
        <div class="input-group mb-3">
          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
        </div>

        <div className="inputTitle">👪제한인원</div>
        <div className="inputWrap">
          <select className="capacity">
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10명이상</option>
          </select>
        </div>

        <div className="inputTitle">✍️내용</div>
        <div class="input-group mb-3 col-5 form-floating">
          <input type="text"  class="form-control height " id="floatingInput" />
        </div>  

        <div class="d-grid gap-2 col-3 mx-auto mt-3" >
          <button class="btn btn-outline-success fs-4" type="button">확인</button>
        </div>

      </div>


    </div>
  );
}