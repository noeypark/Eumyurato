window.onload = function() {
    const loginUserJson = window.sessionStorage.getItem("loginUser");
    if (loginUserJson !== null) {
        // 로그인 상태인 경우
        const loginUser = JSON.parse(loginUserJson);

        const mypageBtn = document.createElement("a");
        mypageBtn.setAttribute("href", "/mypage");
        const mypageIcon = document.createElement("img");
        mypageIcon.setAttribute("src", "/img/person.png");
        mypageIcon.setAttribute("style", "height: 30px; width: 30px;");
        mypageBtn.appendChild(mypageIcon);

        const userNameElem = document.getElementById("userName");
        const userContainer = userNameElem.parentNode;
        userContainer.insertBefore(mypageBtn, userNameElem);
        userNameElem.innerText = loginUser.name;

        const logoutBtn = document.createElement("a");
        logoutBtn.setAttribute("href", "/logout");
        logoutBtn.onclick = function() {
            window.sessionStorage.removeItem("loginUser");
        };

        const logoutIcon = document.createElement("img");
        logoutIcon.setAttribute("src", "/img/logout.png");
        logoutIcon.setAttribute("style", "height: 30px; width: 30px;");
        logoutBtn.appendChild(logoutIcon);

        const navLogin = document.getElementById("navLogin");
        navLogin.style.display = "none";

        const navLogout = document.getElementById("navLogout");
        navLogout.style.display = "flex";
        navLogout.querySelector("#logoutBtn").appendChild(logoutBtn);
    } else {
        // 로그인 상태가 아닌 경우
        const navLogin = document.getElementById("navLogin");
        navLogin.style.display = "flex";

        const navLogout = document.getElementById("navLogout");
        navLogout.style.display = "none";
    }
};