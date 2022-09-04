class FrameResult extends Frame {
    Show() {
        let frame = this.PrevFrame;
        while (!frame.hasOwnProperty("UserName")) {
            frame = frame.PrevFrame;
        }
        document.getElementById("resultUserName").innerText = frame.UserName;
        document.getElementById("resultUserGroup").innerText = frame.Group;

        let allScore = 0;
        let userScore = 0;
        while (frame != null) {
            if (frame.hasOwnProperty("Tasks")) {
                for (const task of frame.Tasks) {
                    allScore++;
                    userScore += task.GetResult();
                }
            }
            frame = frame.NextFrame;
        }
        let percent = userScore / allScore * 100;
        document.getElementById("resultPercent").innerText = `Результат: ${userScore} из ${allScore} (${percent}%)`;

        super.Show();
    }
}