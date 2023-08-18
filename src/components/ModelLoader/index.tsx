import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import * as THREE from "three";

const ModelLoader = (url: string): Promise<THREE.Group> => {
  return new Promise((resolve, reject) => {
    const loader = new FBXLoader();
    loader.load(
      url,
      (model) => {
        resolve(model);
      },
      undefined,
      (error) => {
        reject(error);
      }
    );
  });
};

export default ModelLoader;
