const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
function key_push(key){
    switch (key) {
      case '!'://Enter
        document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(3) > button:nth-child(1)").click();
        break;
      case '?'://BackSpace
        document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(3) > button:nth-child(9)").click();
        break;
      case 'a':
        document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(2) > button:nth-child(2)").click();
        break;
      case 'b':
        document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(3) > button:nth-child(6)").click();
        break;
      case 'c':
        document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(3) > button:nth-child(4)").click();
        break;
      case 'd':
        document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(2) > button:nth-child(4)").click();
        break;
      case 'e':
        document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(1) > button:nth-child(3)").click();
        break;
      case 'f':
        document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(2) > button:nth-child(5)").click();
        break;
      case 'g':
        document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(2) > button:nth-child(6)").click();
        break;
      case 'h':
        document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(2) > button:nth-child(7)").click();
        break;
      case 'i':
        document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(1) > button:nth-child(8)").click();
        break;
      case 'j':
        document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(2) > button:nth-child(8)").click();
        break;
      case 'k':
        document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(2) > button:nth-child(9)").click();
        break;
      case 'l':
        document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(2) > button:nth-child(10)").click();
        break;
      case 'm':
        document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(3) > button:nth-child(8)").click();
        break;
      case 'n':
        document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(3) > button:nth-child(7)").click();
        break;
      case 'o':
        document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(1) > button:nth-child(9)").click();
        break;
      case 'p':
        document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(1) > button:nth-child(10)").click();
        break;
      case 'q':
        document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(1) > button:nth-child(1)").click();
        break;
      case 'r':
        document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(1) > button:nth-child(4)").click();
        break;
      case 's':
        document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(2) > button:nth-child(3)").click();
        break;
      case 't':
        document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(1) > button:nth-child(5)").click();
        break;
      case 'u':
        document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(1) > button:nth-child(7)").click();
        break;
      case 'v':
        document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(3) > button:nth-child(5)").click();
        break;
      case 'w':
        document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(1) > button:nth-child(2)").click();
        break;
      case 'x':
        document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(3) > button:nth-child(3)").click();
        break;
      case 'y':
        document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(1) > button:nth-child(6)").click();
        break;
      case 'z':
        document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(3) > button:nth-child(2)").click();
        break;
    }
  }
  key_push("m");
  key_push("o");
  key_push("v");
  key_push("e");
  key_push("d");
  key_push("!");
  sleep(1000);
  key_push("p");
  key_push("l");
  key_push("a");
  key_push("n");
  key_push("s");
  key_push("!");
  sleep(1000);
  key_push("r");
  key_push("u");
  key_push("g");
  key_push("b");
  key_push("y");
  key_push("!");
  sleep(1000);
  key_push("w");
  key_push("i");
  key_push("t");
  key_push("c");
  key_push("h");
  key_push("!");
  sleep(1000);
