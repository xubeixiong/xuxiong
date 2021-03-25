import Vue from 'vue'
var api = '/api'
//  var commomHost = api
// 打包
 var commomHost = ''
Vue.prototype.Api = function() {
	return {
		getToken: commomHost + '/api/auth/oauth/token', // 登录
		loginOut: commomHost + '/api/auth/tokens/revokeAccessToken', //退出
    getCode: commomHost + '/api/auth/code/image', // 获得验证码
    getPublicKey: commomHost +'/api/auth/rsa/rsaKeyPub', // 获得公钥
    getUserInfo:commomHost + '/api/auth/user', // 获得用户信息

    //公用接口
    getOrderStatusList: commomHost+ '/api/common/api/v1/dicitems/getItemsByParentId', // 获得工单状态
    downFile: commomHost + '/api/detection/v1/orders/downLoadFile', // 下载附件
    uploadFile: commomHost + '/api/detection/v1/orders/uploadOrder', // 上传文件
    getConnectsList: commomHost + '/api/detection/v1/connects/findConnectsByOrderId', // 查询沟通列表

    // 申请端
    getMeunList: commomHost + '/api/authorize/sys/user/acls', // 获得菜单
    saveOrder: commomHost +'/api/detection/v1/orders/saveOrder', // 保存工单
    uploadOrder: commomHost + '/api/detection/v1/orders/uploadOrder', // 上传任务工单
    findOrderByPage: commomHost + '/api/detection/v1/orders/findOrderByPage', // 工单列表
    getOrderDetail: commomHost + '/api/detection/v1/orders/findOrderDetailsById', // 获得工单详情
    deleteOrder:commomHost + '/api/detection/v1/orders/delOrderById', // 删除工单
    sumbitOrder:commomHost + '/api/detection/v1/orders/commitOrder', // 提交工单


    // 管理端
    findProcessSupervision:commomHost + '/api/detection/v1/tasks/findProcessSupervisionByPage', // 分页查询过程监管列表
    findOrderExamine:commomHost +'/api/detection/v1/orders/findOrderExamineByPage', // 分页查询检测审核列表
    findMessageList:commomHost + '/api/detection/v1/messages/findMessagesForMByPage', // 查询消息管理列表
    saveMessage: commomHost + '/api/detection/v1/messages/saveMessage', // 新建消息
    messageDetailById:commomHost + '/api/detection/v1/messages/findMessageById', // 编辑消息管理回填
    noticeMessageDetail: commomHost + '/api/detection/v1/messages/messageDetails', // 通知消息回填
    updateMessage:commomHost + '/api/detection/v1/messages/putMessage', // 更新消息
    deleteMessageById:commomHost + '/api/detection/v1/messages/delMessage', // 删除消息管理
    deleteMessageIds:commomHost + '/api/detection/v1/messages/delMessageByIds', //批量删除消息
    publishMessage:commomHost + '/api/detection/v1/messages/releaseMessage', // 发布消息
    noReleaseMessage: commomHost + '/api/detection/v1/messages/noReleaseMessage', // 撤回消息
    infoFindOrderById: commomHost + '/api/detection/v1/orders/findOrderDetailsById', // 信息审阅
    infoCheckPass: commomHost + '/api/detection/v1/orders/passOrderExamine', // 审核通过
    infoNoPass: commomHost + '/api/detection/v1/orders/noPassOrderExamine', // 申请驳回
    deliverTask: commomHost + '/api/detection/v1/tasks/deliverTask', // 任务派单
    adminHomePage: commomHost + '/api/detection/v1/orders/findOrderForMIndex', // 管理员首页
    getActionName: commomHost + '/api/detection/v1/messages/findMessageReceivedUsers', // 获得执行人姓名
    taskUserList: commomHost + '/api/detection/v1/tasks/findUsersByRole', // 任务用户列表
    checkBugList:commomHost + '/api/pattern/api/v1/yararuletypes/findYaraRuleTypes', // 检测列表
    startCheck:commomHost + '/api/pattern/api/v1/malwaredetection/check', // 开始检测
    checkBody: commomHost + '/api/detection/v1/orders/checkBody', // 检测回调
    lookTaskMoves:commomHost + '/api/detection/v1/orderMoves/findTaskMovesByOrderId', // 工单流转查看
    downloadLoopOrder: commomHost + '/api/detection/v1/orders/downloadOrderMoveByOrderId', // 工单流转下载

    //执行端
    findCheckTask:commomHost +'/api/detection/v1/tasks/findCheckTaskOrdersByPage', // 获得任务工单列表
    synchonismScheme:commomHost + '/api/detection/v1/tasks/synchronismScheme', // 方案同步
    createOrder: commomHost + '/api/detection/v1/tasks/createOrder', // 生成订单
    finishTask:commomHost + '/api/detection/v1/tasks/finishTask', // 完成任务
    messageNoticeList:commomHost + '/api/detection/v1/messages/findMessagesByPage', // 消息通知列表
    batchLooks: commomHost + '/api/detection/v1/messages/batchLooks', // 批量已读
    actuatingHomePage: commomHost + '/api/detection/v1/tasks/findOrderForCheckIndex', // 执行端首页
    saveConnectsContent: commomHost + '/api/detection/v1/connects/saveConnect', // 保存沟通交流

	}
}
