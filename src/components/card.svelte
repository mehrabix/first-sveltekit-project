<script>
    export let data;
</script>

    <div class="bg-indigo-600 w-72 gap-y-1 h-auto  text-white">
        نام: <p>{data.data.name}</p>
        شماره تلفن: <p>{data.data.phone}</p>
        شرکت: <p>{data.data.company}</p>
        تلفن: <p>{data.data.phone}</p>
        وبسایت: <p>{data.data.website}</p>
    <img src="{data.data.avatar}" alt="">
    <a href={`/news/${data.data.id}`}>لینک خبر</a>
    
    </div>

