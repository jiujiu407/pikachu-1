const string =`
.skin * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .skin *::before,
  .skin *::after {
    box-sizing: border-box;
  }
  .skin {
    position: relative;
    background: #ffe600;
    min-height: 50vh;
  }
  .nose {
    border: 10px solid black;
    border-color: black transparent transparent;
    border-bottom: none;
    width: 0px;
    height: 0px;
    position: relative;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    z-index: 10;
  }
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(5deg);
    }
    66% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  .nose:hover {
    /* 左右方向以中间为基准，上下方向以最下面为基准动 */
    transform-origin: 50% 100%;
    animation: wave 300ms infinite;
  }
  .yuan {
    width: 20px;
    height: 6px;
    border-radius: 10px 10px 0 0;
    position: absolute;
    top: -16px;
    left: -10px;
    background: black;
  }
  .eye {
    border: 2px solid black;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: rgba(45, 45, 45);
    border-radius: 50%;
  }
  .eye::before {
    content: "";
    /* 伪元素默认是内联元素 */
    display: block;
    border: 3px solid #000;
    width: 25px;
    height: 25px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    left: 8px;
  }
  .eye.left {
    transform: translateX(-100px);
  }
  .eye.right {
    transform: translateX(100px);
  }
  .mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
  }
  .mouth .up {
    position: relative;
    top: -20px;
    z-index: 1;
  }
  .mouth .up .lip {
    border: 3px solid black;
    height: 30px;
    width: 100px;
    background: #ffe600;
    border-top-color: transparent;
    border-right-color: transparent;
    position: relative;
    position: absolute;
    left: 50%;
    margin-left: -50px;
  }
  .mouth .up .lip.left {
    border-radius: 0 0 0 50px;
    transform: rotate(-17deg) translateX(-53px);
  }
  .mouth .up .lip.right {
    border-radius: 0 0 50px 0;
    transform: rotate(17deg) translateX(53px);
  }
  .mouth .up .lip::before {
    content: "";
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    bottom: 0;
    background: #ffe600;
  }
  .mouth .up .lip.left::before {
    right: -6px;
  }
  .mouth .up .lip.right::before {
    left: -6px;
  }
  .mouth .down {
    height: 180px;
    position: absolute;
    top: 5px;
    width: 100%;
    overflow: hidden;
  }
  .mouth .down .yuan1 {
    border: 3px solid black;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/300px;
    background: #9b000a;
    overflow: hidden;
  }
  .mouth .down .yuan1 .yuan2 {
    width: 200px;
    height: 300px;
    position: absolute;
    background: #ff485f;
    bottom: -155px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
  }
  .face {
    position: absolute;
    left: 50%;
    border: 3px solid black;
    width: 88px;
    height: 88px;
    top: 200px;
    margin-left: -44px;
    z-index: 3;
    border-radius: 50%;
    background: #ff0000;
  }
  .face > img {
    position: absolute;
    top: 50%;
    left: 50%;
  }
  .face.left > img {
    transform: rotateY(180deg);
    transform-origin: 0 0;
  }
  .face.left {
    transform: translateX(-180px);
  }
  .face.right {
    transform: translateX(180px);
  }
`
export default string;