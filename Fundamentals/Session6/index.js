async function postData(data)
{
    const url = "https://sample.mindx.edu.vn/c4e/api/posts"
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json"
        }

    });
    return await response.json();
}
async function main()
{
    const data = {
        title: "C4E-J01",
        author: "NQ- Code là niềm vui <3",
        content: "Cảm giác code mình viết nó chạy còn vui hơn cảm giác biết crush cũng thích mình :v"

    };
    const newData = await postData(data);
}
main();