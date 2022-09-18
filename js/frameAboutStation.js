class FrameAboutStation extends Frame {
    DateFromWorking = null;

    Init() {
        let year = 1990 + Math.round(Math.random() * 31);
        let mounth = 1 + Math.round(Math.random() * 11);
        this.DateFromWorking = new Date(year, mounth, 1);
        document.getElementById("dateFrom").innerHTML = `Дата ввода в эксплуатацию:<br> 01.${mounth < 10 ? "0" + mounth : mounth}.${year}.`;
    }
}