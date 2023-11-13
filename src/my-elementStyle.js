import { css } from "lit-element";


export default css`

#principal{
    width:1330px;
    height:150px;
    border:1px solid #7483FF;
    margin:auto;
    background: #7483FF;
    }
    
    header{
      
      width:1330px;
      height:150px;
      border:0px solid #7483FF;
      max-width: 1200px;
      margin:auto;
      overflow: hidden;
    }
    #logo{
      float:left;
    
    }
    .menu{
      width: 950px;
      height: 50px;
      border: 0px solid #7483FF;
      float:right;
      margin-top:45px;
      z-index:1;
    }
    
    .menu li:hover{
      background-color:#7483FF;
      border-radius: 60px;
    
    }
    .menu ul li{
      list-style: none;
      float:right;
    }
    .menu ul li a{
      text-decoration: none;
      padding: 12px 17px;
      border:0px solid #7483FF;
      font-weight: bold;
      color:#000000;
      font: condensed 135% sans-serif;
    
    }
    
    #MISION {
      width: 857px;
      height: 500px;
      float: left;
      background: #7483FF;
      margin-top:10px;
      margin-right: 10px;
      margin-bottom: 10px;
    }
    #MISION h2 {
      font-size: 40px;
      text-align:center;
      line-height: 100px;
    }
    #MISION p{
      font-size: 20px;
      text-align: justify;
      margin-left: 20px;
      margin-right: 20px;
    }
    aside{
      width: 420px;
      height: 500px;
      background: #7483FF;
      margin-top:10px; 
      float: right; 
    }
    aside h2 {
      font-size: 40px;
      text-align: center;
      font-style: sans-serif;
    }
    aside img {
      font-size: 40px;
      text-align: center;
      font-style: sans-serif;
    
    }
    footer {
      background: #7483FF;
      clear :both;
      font-size: 13px;
      text-align: center;
      padding: 3px;
      font-style: sans-serif;
    
    }
`