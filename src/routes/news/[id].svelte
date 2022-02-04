<script context="module">


    export async function load(page){

        console.log(page.params.id)
        const id = page.params.id;
        const url = `https://jsonplaceholder.ir/posts/${id}`;
        const res = await fetch(url);
        const data = await res.json()
      
       
        console.log(data)
        
        
        return {props: {data}};

    }
</script>
<script>
    export let data;
    console.log(data)

</script>

نام مطلب : <h1>{data.title}</h1>
محتوای مطلب:
<p>{data.body}</p>