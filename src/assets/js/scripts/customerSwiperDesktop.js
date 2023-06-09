const customerSwiperDesktop = () => {
    const members = [
        {x: "0px", y: "0px", selector: document.getElementById("customer_1")},
        {x: "480px", y: "170px", selector: document.getElementById("customer_2")},
        {x: "180px", y: "350px", selector: document.getElementById("customer_3")},
        {x: "610px", y: "300px", selector: document.getElementById("customer_4")},
        {x: "470px", y: "-70px", selector: document.getElementById("customer_5")},
    ]
    let activeMemberI = members.indexOf(members[0])
    
    members.forEach((member) => {
        member.selector.addEventListener("click", () => {
            setActiveMember(member)
        })
    })

    const setActiveMember = (member) => {
        // Меняем X, Y,transform, class у участника на которого кликули на значения текущего мембера
        let clickedX = member.x;
        let clickedY = member.y;
        let activeMember = members[activeMemberI]
        member.selector.style.transform = `translate(${activeMember.x}, ${activeMember.y})`;
        member.x = activeMember.x;
        member.y = activeMember.y;
        member.selector.classList.add('customer__member--active');

        // Меняем X Y,transform, class у активного участника на значения на которого кликнули
        activeMember.selector.style.transform = `translate(${clickedX}, ${clickedY})`;
        activeMember.x = clickedX;
        activeMember.y = clickedY;
        activeMember.selector.classList.remove('customer__member--active');

        // Назначем нового активного участника
        activeMemberI = members.indexOf(member);
    }
}