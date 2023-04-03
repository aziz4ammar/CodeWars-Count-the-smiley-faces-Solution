function countSmileys(arr) {
    return arr.filter(v=>v.match(/(:|;)(-|~)?(\)|D)/)).length
}
//by aziz ammar