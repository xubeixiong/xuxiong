
const commomMethods ={
  data () {
   return {
   }
  },
  methods:{
    setDefaultTime (val){
      if(!val){
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        if(month >= 1 && month <= 9) {
          month = "0" + month;
        }
        if(strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
        }
        if(hours >= 0 && hours <= 9) {
          hours = "0" + hours;
        }
        if(minutes >= 0 && minutes <= 9) {
          minutes = "0" + minutes;
        }
        var currentdate = year + '-' + month + '-' + strDate + ' ' + hours + ':' + minutes;
        return currentdate;
      }else {
        return val
      }
    },
    initData (val) {
      var date = new Date(val);
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if(month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if(strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var hours = date.getHours();
      if(hours >= 0 && hours <= 9) {
        hours = "0" + hours;
      }
      var minutes = date.getMinutes();
      if(minutes >= 0 && minutes <= 9) {
        minutes = "0" + minutes;
      }
      var currentdate = year + '-' + month + '-' + strDate + ' ' + hours + ':' + minutes;
      return currentdate;
    },
      objectToFormData (obj, form, namespace) {
        const fd = form || new FormData();
        let formKey;
        for(var property in obj) {
          if(obj.hasOwnProperty(property)) {
            let key = Array.isArray(obj) ? '[]' : `[${property}]`;
            if(namespace) {
              formKey = namespace + key;
            } else {
              formKey = property;
            }
            // if the property is an object, but not a File, use recursivity.
            if(typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
              this.objectToFormData(obj[property], fd, formKey);
            } else {

              // if it's a string or a File object
              fd.append(formKey, obj[property]);
            }
          }
        }
    return fd;
  },
    commomDwon (id,fileName,paName) {
      this.$req().downPost(this.Api().downFile +'?id=' +id +'&'+paName+'='+fileName, function(res) {
        if (res.data) {
          let blob = new Blob([res.data], {})
          if(window.navigator.msSaveOrOpenBlob) {
            navigator.msSaveBlob(blob, fileName)
          } else {
            var link = document.createElement('a')
            link.href = window.URL.createObjectURL(blob)
            link.download = fileName
            //此写法兼容可火狐浏览器
            document.body.appendChild(link);
            link.style.display='none';
            link.click()
            //此写法兼容可火狐浏览器
            document.body.removeChild(link)
            //释放内存
            window.URL.revokeObjectURL(link.href)
          }
        }else {
          this.$Message.error('无文件返回')
        }
      })
    },
    resetArray (array) {
      //return array.sort((a,b)=>a.uuid-b.uuid).filter((r,i,a)=>(a[i+1]||{}).uuid!=r.uuid)
      let hash = {}
      const data2 = array.reduce((preVal, curVal) => {
        hash[curVal.uuid] ? '' : hash[curVal.uuid] = true && preVal.push(curVal);
        return preVal
      }, [])
       return data2
    },
    changePage (e,callBack) {
      this.pageData.page=e
      let arrIndex = this.pageData.page == 1? 2: parseInt(this.pageData.page + this.pageData.pageSize)
      let obj = []
      Object.assign(obj,this.defineArray)
      let reSize = this.defineArray.length<this.pageData.pageSize?this.defineArray.length:this.pageData.pageSize
      let lastData = obj.splice(arrIndex-2,reSize)
      callBack(lastData)
    },
    changePageSize (e,callBack) {
      this.pageData.pageSize=e
      let arrIndex = this.pageData.page == 1? 2: parseInt(this.pageData.page + this.pageData.pageSize)
      let obj = []
      Object.assign(obj,this.defineArray)
      let reSize = this.defineArray.length<this.pageData.pageSize?this.defineArray.length:this.pageData.pageSize
      let lastData = obj.splice(arrIndex-2,reSize)
      callBack(lastData)
    },
    isAllSelectTitle (name,shortTitleList,names) {
      let uuid = names || 'uuid'
      let _this = this
      setTimeout(function () {
         for(let index  in  _this.$refs[name].objData){
            _this.$refs[name].objData[index]._isChecked = false
             for(let i=0;i<shortTitleList.length; i++){
                 if (shortTitleList[i][uuid]  ==  _this.$refs[name].objData[index][uuid]){
                   _this.$refs[name].objData[index]._isChecked = true
                 }
             }
          }
      },0)
    }
  },
}
export {commomMethods}
