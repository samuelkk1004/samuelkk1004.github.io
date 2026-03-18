//라이브러리(도서관) -> 남들이 미리 만들어놓은 코드 덩어리
//import (라이브러리 이름); -> (이름)을 가져다가 쓸 것이다.
//import *(모든것) from 'three'
//as (별명) : three라는 라이브러리로부터 모든 기능을 가져다 쓰겠다
//이 라이브러리 안의 기능은 내가 THREE라고 부를게!
import * as THREE from 'three' ;

//라이브러리의 기능 가져다 쓰기.
//장면 = 새로운 THREE.장면;
//객체지향 -> 붕어빵 굽기
const scene = new THREE.SCENE();
scene.background = new THREE.COLOR(0xf0f0f0);
//매개변수!!

const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, 10);
camera.lookAt(0, 2, 0);