// 방에 입장했을 때 왼쪽 사이드바에 보이는 참여 인원 페이지입니다.

const SideBarRoom = () => {
    return (
	<div class="text-start">
        <span class="h5">참여인원</span>
        <hr/>
        <img 
        src='images\profilePicture.png'
        class="rounded-circle" 
        style={{width:'40px'}} 
        alt="room preview" />
        &nbsp;이한수<br/>
        <img 
        src='images\profilePicture.png'
        class="rounded-circle" 
        style={{width:'40px'}} 
        alt="room preview" />
        &nbsp;이한수<br/>
        <img 
        src='images\profilePicture.png'
        class="rounded-circle" 
        style={{width:'40px'}} 
        alt="room preview" />
        &nbsp;이한수<br/>


    </div>
    );
};

export default SideBarRoom;