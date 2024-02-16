


function sleep(t:number):Promise<void>{
  return new Promise((resolve, reject) => {
    setTimeout(resolve, t);
  });
}



async function main(){
  console.log('Before.....');

  // Đợi 30s mới chạy chương trình. Hãy mở task manager lên và sẽ số ram.
  await sleep(30_000);

  


  // Số lượng phần tử sẽ được thêm vào là 10k
  const numberOfItems:number = 1_000_000;

  const items:{
    id: number,
    label: string,
  }[] = [];

  for(let i = 0; i < numberOfItems; i++){
    items.push({
      id: i,
      label: `Item[${i}] New minor version of npm available! 10.2.4 -> 10.4.0`,
    });
  }


  console.log('After....')
  // Đợi 60s mới đóng chương trình
  await sleep(60_000);
}


main();

