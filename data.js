window.onload = function () {
    projects = [
        {
            title: "Match 3",
            image: "https://raw.githubusercontent.com/yatima1460/Match3/master/docs/demo.gif",
            url: "https://github.com/yatima1460/Match3",
            text: "I shoved inside a game demo written in modern C++17 and SDL2 as much functional programming as possible as a proof of concept"
        },
        {
            title: "CGLMath",
            image: "quaternion.webp",
            url: "https://github.com/yatima1460/CGLMath",
            text: "I hate glm with a passion so I wrote a simpler C11 library for OpenGL math: Quaternions, Matrices, Vectors..."
        },
        {
            title: "A*",
            image: "https://raw.githubusercontent.com/yatima1460/AStar/master/docs/astar.png",
            url: "https://github.com/yatima1460/AStar",
            text: "When devs develop A* they don't consider cache-misses and CPU branch prediction, this instead does, also has better heuristics"
        },
        {
            title: "Table And Chairs",
            image: "https://github.com/yatima1460/TableAndChairs/raw/master/docs/tableandchairs.webm?sanitize=true",
            url: "https://github.com/yatima1460/TableAndChairs",
            text: "A dynamically resizable table with chairs in C++ running on Unreal Engine 4.22, useful for Archviz I think"
        },
        {
            title: "Drill",
            image: "https://raw.githubusercontent.com/yatima1460/Drill/master/Assets/icon.svg?sanitize=true",
            url: "https://drill.software",
            text: "Search files and apps in file systems without using indexing, but optimized crawling"
        },
        {
            title: "Gestalt Engine",
            image: "gestalt_engine.jpg",
            url: "",
            text: "My own engine written in C11 and C++17, SDL2, OpenGL 4.x with forward rendering and shadow mapping. Not complete yet."
        },
        {
            title: "Mandelbrot",
            image: "mandelbrot.png",
            url: "",
            text: "C++17 and SDL2 to draw Mandelbrot. Not complete yet."
        }
        
        
        
        ];

    let projects_div = document.getElementById("projects");

    if(window.innerHeight < window.innerWidth){
        // Landscape
        projects.forEach(project => {
            projects_div.innerHTML +="<a class=\"project\" href=\"" + project.url + "\" target=\"_blank\" rel=\"noopener\">\
                <h2>"+ project.title + "</h2>\
                <div class=\"project-description\">\
                    <img src=\""+ project.image + "\">\
                    <div class=\"project-text\">"+ project.text + "\
                        <p class=\"fakelink\">"+ project.url + "</p>\
                    </div>\
                </div>\
            </a>"
        });
    }
    else
    {
        // Portrait
        projects.forEach(project => {
            projects_div.innerHTML +="<a class=\"project\" href=\"" + project.url + "\" target=\"_blank\" rel=\"noopener\">\
                <h2>"+ project.title + "</h2>\
                <div class=\"project-description\">\
                    <img src=\""+ project.image + "\">\
                    <div class=\"project-text\">"+ project.text + "</div>\
                </div>  <p class=\"fakelink\">"+ project.url + "</p>\
            </a>"
        });
    }
    




}