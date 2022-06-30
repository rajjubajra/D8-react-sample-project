import React, {useEffect, useState} from 'react';
import {getPromise} from '../config/getPromise';
import {postPromise} from '../config/postPromise';
import Button from '../components/Button';

function  Articles() {

  const [data, setData] = useState('');

  console.log(data ? "true" : "false");

  /** JSONAPI PATH */
  const path = '/jsonapi/node/article?include=field_image'

  /** MERGET INCLUDE AND DATA */
  function mergeArrayObjects(arr1, arr2){
    let start = 0;
    let arr = [];

    while(start < arr1.length){
      if(arr1[start].relationships.uid.data.id === arr2[start].relationships.uid.data.id){
        //pushing the merged objects in to array
        arr.push({
          "id": arr1[start].id,
          "title": arr1[start].attributes.title,
          "body": arr1[start].attributes.body.value,
          "image": arr2[start].attributes.uri.url,
          "image_alt": arr1[start].relationships.field_image.data.meta.alt,
          "image_height": arr1[start].relationships.field_image.data.meta.height,
          "image_width": arr1[start].relationships.field_image.data.meta.width,
        })
      }
      //increment start value
      start = start + 1;
    }
    return setData(arr);
  }

  useEffect(() =>{
      getPromise(path)
      .then(res => {
        console.log(res)
        console.log(res.data.data[0])
        mergeArrayObjects(res.data.data, res.data.included)
      })
      .catch(err => console.log(err))
  },[])


  useEffect(()=>{
      postPromise('/jsonapi/node/article')
      .then(res=>console.log(res))
      .catch(err => console.log("POST ERROR: ",err))     
  },[])

  

  
  return (
    <div>
     {
      data && data.map(item => {
          return (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <div>
                <img 
                    style={{width:"200px"}} 
                    src={`https://dev.yellow-website.com${item.image}`} 
                    alt={item.image_alt} />
                <div className="margin-1">
                    <div dangerouslySetInnerHTML={{__html: item.body}} />
                </div>
                <div>
                    <Button title="Edit" />
                    <Button title="Delete" />
                </div>
            </div>
            
          </div>)
      })
      
    }
    </div>
  )

}

export default  Articles
