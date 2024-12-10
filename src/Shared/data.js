import files from "./Ressources/files";
const filesObj = files.filesMap;

let data = [
];

function getObj(type,file){
  for(let i = 0 ; i < file.length; i++ ){
    let line = file[i];
    if(line.type === type){
      return line
    }
  }
}

for(let file in filesObj){
  const fileData =  filesObj[file].default.data;

  let filters = false;
  if(getObj("filters",fileData)){
    filters = getObj("filters",fileData).data
  }
  const keywords = getObj("keywords",fileData);

  let tempData = {
    title:file,
    keywords:keywords,
    description:fileData[2].data,
  }

  if(filters){
    tempData = {...tempData,filters:filters}
  }
  
  data.push(tempData)
}

function getSearchData(){
  return data
}

export default getSearchData;