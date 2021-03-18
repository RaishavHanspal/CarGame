const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer =  new THREE.WebGLRenderer();
const loader = new THREE.GLTFLoader();
const light = new THREE.HemisphereLight( 0xffffff, 0xffffff, 12 );
renderer.setClearColor("#E5E5E5");
camera.position.z = 5;
light.position.set(0,0,5)
scene.add( light );
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement);
var car;
var house;
//CAR-MODAL --> 
loader.load( 'js/pony_cartoon/scene.gltf',  ( gltf ) => {
    car = gltf.scene;
    car.position.set(-10,-2,-5);
    car.rotation.y = 8;
    let animate = () => {
        requestAnimationFrame( animate );
        renderer.render( scene, camera );
    }
    animate();
	scene.add( car );
    }, 
    undefined,  
    ( error ) => {
        console.error( error );
    });
//HOUSE-MODAL -->
loader.load( 'js/japan_house/scene.gltf',  
    ( gltf ) => {
        house = gltf.scene;
        house.position.set(0,-150,-980);
        scene.add( house );
        renderer.render( scene, camera );
    }, 
    undefined,
    ( error ) => {
        console.error( error );
    });

window.addEventListener('resize', () => {
    renderer.setSize( window.innerWidth, window.innerHeight);
})
document.addEventListener('keydown', (event) => {
    controller(event.key)
  });

    let controller = (key) => {
        switch(key)
        {
            case 'w': {
                car.position.x += 0.1; 
                break; 
                }
            case 's': {
                car.position.x -= 0.05;
                break;
                }
            case 'i': {
                console.log(car,house);
            }
        }
  }