import keyInput from "./KeyInput.js";
import connect from "./Connect.js";


const ratio=window.innerWidth / window.innerHeight;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75,ratio , 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const light = new THREE.AmbientLight(0x484848);
const dLight = new THREE.DirectionalLight(0xffffff,0.5);

light.add(dLight);
scene.add(light);

const geometry = new THREE.BoxGeometry( 50,0.1,50);
const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const ground = new THREE.Mesh( geometry, material );
scene.add( ground );

camera.position.set(5,15,15);

function animate() {
	requestAnimationFrame( animate );

    
    if(keyInput.isPressed(38)){
        camera.position.y += 0.5;
        camera.position.x += 0.5;
    }
    if(keyInput.isPressed(40)){
       camera.position.y -= 0.5;
        camera.position.x -= 0.5;
    }
    if(keyInput.isPressed(37)){
        camera.position.x -= 0.5;
     }
     if(keyInput.isPressed(39)){
         camera.position.x += 0.5;
     }

    camera.lookAt(ground.position);
	renderer.render( scene, camera );
}
animate();

connect.then((result)=>{
    console.log(result);
    result.buildings.forEach((b,index)=> { 
        if(index<=result.supply){
            const boxgeometry = new THREE.BoxGeometry(b.w,b.h,b.d);
            const boxmaterial = new THREE.MeshBasicMaterial( { color: 0x484848 } );
            const box = new THREE.Mesh( boxgeometry, boxmaterial );
            box.position.set(b.x,b.y,b.z);
            scene.add( box );
        }
    });
});

0x041000
renderer.render(scene,camera);

