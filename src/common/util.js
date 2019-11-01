export const d2a = function(d){
    return d*Math.PI/180
}
export const a2d = function(a){
    return a/180*Math.PI
}
export const calcPointOnCircle = function(c, r, angle) {
    let x = c.x + Math.cos(d2a(angle)) * r
    let y = c.y + Math.sin(d2a(angle)) * r
    return {
        x,
        y,
    }
}