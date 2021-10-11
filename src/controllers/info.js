exports.infoRender = (req,resp) => {
    const data = {};
    data.args = process.argv;
    data.platform = process.platform;
    data.version = process.version;
    data.mem = process.memoryUsage();
    data.path = process.execPath;
    data.pid = process.pid;
    data.folder = process.cwd();

    resp.render('info', {data: data});
};