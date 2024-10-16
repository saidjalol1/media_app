<template>
    <div class="wrapper px-5 py-5">
        <div class="post_detail bg-white px-4 py-4 rounded-lg shadow-md hover:shadow-lg">
        <div class="flex justify-start items-center gap-x-4">
            <span>
                <svg width="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M160 96a96 96 0 1 1 192 0A96 96 0 1 1 160 96zm80 152l0 264-48.4-24.2c-20.9-10.4-43.5-17-66.8-19.3l-96-9.6C12.5 457.2 0 443.5 0 427L0 224c0-17.7 14.3-32 32-32l30.3 0c63.6 0 125.6 19.6 177.7 56zm32 264l0-264c52.1-36.4 114.1-56 177.7-56l30.3 0c17.7 0 32 14.3 32 32l0 203c0 16.4-12.5 30.2-28.8 31.8l-96 9.6c-23.2 2.3-45.9 8.9-66.8 19.3L272 512z"/>
                </svg>
            </span>
            <h1 class="font-bold text-black text-xl">Django ORM'da annotate metodi</h1>
        </div>
        <div class="body mt-5">
            How It Works:
            html, body { height: 100%; }: Ensures that the document body is at least the height of the viewport.
            .wrapper { min-height: 100vh; display: flex; flex-direction: column; }: The .wrapper element is a flexbox container with min-height: 100vh (100% of the viewport height).
            .content { flex: 1; }: The content area grows to take up the available space, pushing the footer to the bottom if the content is less than the viewport height.
            The footer stays at the bottom of the page in all cases—whether there’s little or a lot of content.
                Example Scenarios:
            Not enough content: The footer sticks to the bottom of the viewport because the .wrapper takes up the full height of the viewport.
            Enough content: When content grows, the footer moves down naturally.
            This solution ensures that the footer behaves exactly how you want, regardless of the amount of content.
        </div>
        <span class="flex justify-end mt-10 text-gray-500 text-sm">2024-06-10 10:00 am</span>
    </div>
    <div class="likes_dislikes flex gap-x-4 items-center mt-4 shadow-md hover:shadow-lg px-4 py-4 rounded-lg bg-white">
            <span class="flex gap-x-2 items-center text-red-500 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                    <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
                </svg>
                25+
            </span>
            <span class="flex gap-x-2 items-center text-blue-500 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-hand-thumbs-down-fill" viewBox="0 0 16 16">
                    <path d="M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.38 1.38 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51q.205.03.443.051c.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.9 1.9 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2 2 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.2 3.2 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.8 4.8 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591"/>
                </svg>
                25+
            </span>
            <span class="flex gap-x-2 items-center text-yellow-500 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                </svg>
                25
            </span>
        </div>
    </div>
    <Footer />
</template>
<style scoped>
footer{
    width: 100%;
    position: absolute;
    bottom: 0;
}
</style>
