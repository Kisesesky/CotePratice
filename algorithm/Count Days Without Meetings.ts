function countDays(days: number, meetings: number[][]): number {
    meetings.sort((a,b) => a[0] - b[0])
    let meetD:number[][] = []

    for(let [m, f] of meetings) {
        if(meetD.length === 0 || meetD[meetD.length -1][1] < m) {
            meetD.push([m, f])
        }else {
            meetD[meetD.length -1][1] = Math.max(meetD[meetD.length -1][1], f)
        }
    }
    let meet = 0
    for(let [a,b] of meetD){
        meet += b - a +1
    }

    return days - meet
};

//
function countDays2(days: number, meetings: number[][]): number {
    let nm = meetings.sort((a,b) => a[0] - b[0])
    let end = nm[0][1]
    let cnt = nm[0][0] -1

    for(let i =1; i<nm.length; i++){
        if(end <= nm[i][0]){
            cnt += nm[i][0] - end -1
            end = nm[i][1]
        }
        else {
            if(end>nm[i][1])
                end = nm[i][1]
        }
    }
    return cnt + (days - end)
}