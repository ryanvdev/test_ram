


function sleep(t:number):Promise<void>{
  return new Promise((resolve, reject) => {
    setTimeout(resolve, t);
  });
}



async function main(){
  console.log('Before.....');

  // Đợi 30s mới chạy chương trình. Hãy mở task manager lên và sẽ số ram.
  await sleep(5_000);

  


  // Số lượng phần tử sẽ được thêm vào là 10k
  const numberOfItems:number = 12_000;

  console.log('Số phần tử là:', numberOfItems);

  const items:{
    id: number,
    question: string,
    answers: string[],
    expand: string;
  }[] = [];

  for(let i = 0; i < numberOfItems; i++){
    items.push({
      id: i,
      question: `Question[${i}] New minor version of npm available!
      10.2.4 -> 10.4.0 Your branch is based on 'origin/main',
       but the upstream is gone`,
      answers: [
        `Answer[${i}][1]: Your branch is based on 'origin/main', but the upstream is gone.`,
        `Answer[${i}][2]: Your branch is based on 'origin/main', but the upstream is gone.`,
        `Answer[${i}][3]: Your branch is based on 'origin/main', but the upstream is gone.`,
        `Answer[${i}][4]: Your branch is based on 'origin/main', but the upstream is gone.`,
      ],
      expand: `Expand[${i}] Your branch is based on 'origin/main', but the upstream is gone.`,
    });
  }


  console.log('After....')
  // Đợi 60s mới đóng chương trình
  await sleep(60_000);
}


main();

