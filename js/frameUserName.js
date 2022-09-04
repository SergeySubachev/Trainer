class FrameUserName extends Frame {
    UserName = "";
    Group = "";

    IsComplete() {
        this.UserName = document.getElementById("tbUserName").value;
        if (this.UserName.length == 0) return false;
        this.Group = document.getElementById("selectGroup").value;
        if (this.Group == "none") return false;
        return true;
    }
}