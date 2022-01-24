export const setEmergencyContactInfo = (target) => {
    let contactData = {
        contact_name: target[0].value,
        contact_phone: target[1].value,
        contact_email: target[2].value
      }
    return fetch('/addEmergencyContactInfo', {
        method: "POST",
        body: JSON.stringify({contactData}),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(data=>data.json())
        .then(result=>result)
        .catch(e=>e)
}
export const fetchEmergencyContactInfo = () => {
    return fetch('/getEmergencyInfo').then(data=>data.json())
    .then(res =>(res.result))
    .catch(e=>(e))
}
export const getContactInfo = () => {
    return fetch('/getContactInfo').then(data=>data.json())
      .then(res => (res.userData))
      .catch(e=>(e))
}
export const editProfileInfo = (target) => {
    let userData = {
        name: target[0].value,
        number: target[1].value,
        email: target[2].value,
        address: target[3].value,
        unit: target[4].value,
        city: target[5].value,
        postal: target[6].value,
      };
    return fetch('/editContactInfo', {
        method: "POST",
        body: JSON.stringify({userData}),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(data=>data.json())
        .then(result=>result)
        .catch(e=>(e))
}

export const uploadImage = async (img) => {
  console.log(img.name.replace('.png', ''))
  //get secure url from server
  const response = await fetch('/s3Url', {
    method: 'POST',
    body: JSON.stringify({name: img.name.replace('.png', '').replace('-', '')}),
    headers: {
      "Content-Type": "application/json",
    },
  })
  const body = await response.json()
  if (response.status !== 200) {
    throw Error(body.message);
  }
  //post image directly to s3
  fetch(body.url, {
    method: "PUT", 
    headers: {
      "Content-Type": "multipart/form-data"
    },
    body: img,
     // not 0, place image file here, like from form capture.
  }).then(result => {
    console.log(result)
    console.log(result.url)
  })
  .catch(e => console.log(e))
}

export const sendImageToServer = (file) => {
  const formData = new FormData()
  formData.append("image", file)
  fetch('/s3', {
    method: 'POST',
    body: formData
  }).then( data => data.json())
  .then(url => {
    document.getElementById('profile-image').src = url.imgUrl
  })
  .catch( e => console.log(e))
}


/* Opens File box on computer for upload */
export const importData = () => {
  let input = document.createElement('input');
  input.type = 'file';
  input.onchange = _ => {
    // you can use this method to get file and perform respective operations
            let [file] =   Array.from(input.files);
            console.log(file)
            sendImageToServer(file);
        };
  input.click();
  return 
}

export const getImgForUser = () => {
  return fetch('/getImage')
            .then(data=>data.json())
            .then(result => (result))
            .catch( e => console.log(e))

}


export const getHelp = () => {
  console.log('here')
  fetch('/getHelp')
    .then(data => data.json())
    .then(result => console.log(result))
    .catch( e => console.log(e))
}