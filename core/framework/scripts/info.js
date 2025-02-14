if (!isSub & manifest.content.infoScreen) {
    window_infoScreen.getElementsByTagName("button")[0].addEventListener("click", function () {
        var fsE = require('fs-extra'), appName = app.getName(), getAppPath = path.join(app.getPath('appData'), appName), fs = require('fs'), chromeCacheDir = path.join(app.getPath('userData'), 'Cache');
        fsE.unlink(getAppPath, () => {
            if (fs.existsSync(chromeCacheDir)) {
                var files = fs.readdirSync(chromeCacheDir);
                for (var i = 0; i < files.length; i++) {
                    var filename = path.join(chromeCacheDir, files[i]);
                    if (fs.existsSync(filename)) {
                        try {
                            fs.unlinkSync(filename);
                        } catch (e) { }
                    }
                }
            }
            app.relaunch();
            app.exit();
        });
    });
    window_infoScreen.getElementsByTagName("button")[1].addEventListener("click", function () {
        process.exit(0);
    });
    document.getElementById("_infoScreen_Name").innerHTML = manifest.name;
    document.getElementById("_infoScreen_Version").innerHTML = manifest.version;
    document.getElementById("_infoScreen_Publisher").innerHTML = manifest.publisher;
    document.getElementById("_infoScreen_Platform").innerHTML = os.platform();
    document.getElementById("_infoScreen_Release").innerHTML = os.release();
    document.getElementById("_infoScreen_Type").innerHTML = os.type();
    var CPUs = os.cpus(), fCPUs = [], fStringOfCPUs = "";
    for (var i = 0; i < CPUs.length; i++)
        if (fCPUs.length < 1) {
            fCPUs[0] = CPUs[i].model;
            fStringOfCPUs += CPUs[i].model + " ";
        } else
            for (var i2 = 0; i2 < fCPUs.length; i2++)
                if (fCPUs[i2] != CPUs[i].model) {
                    fCPUs[fCPUs.length] = CPUs[i].model;
                    fStringOfCPUs += CPUs[i].model + " ";
                }
    document.getElementById("_infoScreen_CPUs").innerHTML = fStringOfCPUs;
    var loadAvg = os.loadavg();
    document.getElementById("_infoScreen_LoadAverages").innerHTML = loadAvg[0] + ", " + loadAvg[1] + ", " + loadAvg[2];
    document.getElementById("_infoScreen_DirOfTempFiles").innerHTML = os.tmpdir();
    document.getElementById("_infoScreen_SystemMemory").innerHTML = os.totalmem();
    var userInfo = os.userInfo();
    document.getElementById("_infoScreen_Username").innerHTML = userInfo.username;
    document.getElementById("_infoScreen_UserID").innerHTML = userInfo.uid;
    document.getElementById("_infoScreen_UserHomeDirectory").innerHTML = userInfo.homedir;
    const process = require('process');
    process.type;
    document.getElementById("_infoScreen_ProcessType").innerHTML = process.type;
    document.getElementById("_infoScreen_ElectronVersion").innerHTML = process.versions.electron;
    document.getElementById("_infoScreen_ChromeVersion").innerHTML = process.versions.chrome;
    document.getElementById("_infoScreen_NodeVersion").innerHTML = process.version;
    document.getElementById("_infoScreen_V8Version").innerHTML = process.versions.v8;
    document.getElementById("_infoScreen_UnicodeVersion").innerHTML = process.versions.unicode;
    topBar_Icon.addEventListener("click", function () {
        window_infoScreen.style.display = (window_infoScreen.style.display == "none") ? "block" : "none";
    });
}