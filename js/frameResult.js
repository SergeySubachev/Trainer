class FrameResult extends Frame {
    Show() {
        let frame = this.PrevFrame;
        while (!frame.hasOwnProperty("UserName")) {
            frame = frame.PrevFrame;
        }
        document.getElementById("resultUserName").innerText = frame.UserName;
        document.getElementById("resultUserGroup").innerText = frame.Group;

        let result = [];
        while (frame != null) {
            if (frame.hasOwnProperty("Tasks")) {
                frame.GetResult(result);
            }
            frame = frame.NextFrame;
        }

        let allScore = result.length;
        let userScore = 0;
        
        let divDetails = document.getElementById("resultDetails");
        divDetails.innerHTML = "";
        for (const res of result) {
            userScore += res.Score;
            let p = document.createElement("p");
            p.innerText = `${res.Caption}: ${Math.round(res.Score * 100)}%.`;
            p.style.lineHeight = 1.0;
            divDetails.appendChild(p);
        }

        let percent = Math.round(userScore / allScore * 100);
        document.getElementById("resultPercent").innerText = `Результат: ${Math.round(userScore * 100) / 100} из ${allScore} (${percent}%)`;

        super.Show();
    }
}