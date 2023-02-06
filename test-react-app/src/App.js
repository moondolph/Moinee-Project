import logo from './logo.svg';
import './App.css';

function App() {

    //  fileChangedHandler = (event) => {
    //   const files = event.target.files;
    //   this.setState({
    //     selectedFiles: files
    //   });
    // };

  return (
    <div className="App">
      <div className="page container">
        <div className="titleWrap">※프로필수정※</div><br />

        <div className="contentWrap">
          <div className="inputTitle">프로필사진</div><br />

          <input type="file" multiple /><br />
          userId : <input type="text" value="abc667" /> <br />
          password : <input type="text" value="123asd123" /> <br />
          name : <input type="text" value="abc667" /> <br />
          birthday : <input type="text" value="11111111" /> <br />
          email : <input type="text" value="abc667@naver.com" /> <br />
          gender : <input type="text" value="M" /> <br />
          address : <input type="text" value="abc6671111" /> <br />
          latitude : <input type="text" value="123.2211" /> <br />
          longitude : <input type="text" value="52.1455" /> <br />

          <button >저장하기</button>
        </div>
      </div>
    </div>
  );
}

export default App;


// onChange={this.fileChangedHandler}

// onClick={this.onClickHandler}