const router  = express.Router();
const cRouter = require(controller_path + 'Index.controller');
/*const graph = require('fbgraph');
const uuidv4 = require('uuid/v4');
const axios = require('axios');*/

router.get('/', cRouter.index);

/*router.get('/old', function (req, res, next) {
    graph.setAccessToken('EAAfsIsK99i0BAH6dmPZATz45todBxZCX9Bi9LM8DvQq7yVVDYkmRMiqJ5w3zvRTdZCVpo04Nc0QOdIGvuZA38EfUZCGJEbmDSeYmkI2hWjovFDQLgPHYB9gjZCEBBfrFhGHZAh2ZCvdbFaVaJeov5D7tbc0FwHzwCIrGZA5LSRxPmD3K7AopzhkyZASAjZCaMZCLcKpRJwpK2DXE3QZDZD');
    graph.get("1140043566105507" + "?fields=published_posts{message,comments{message,comments,from},from}", {}, async function (err, respo) {

        res.send(respo);
        let data = respo.published_posts.data;
        if (data.length > 0) {
            for (item of data) {
                console.log("=====================================================");
                if (typeof item.comments !== 'undefined') {
                    for (ids of item.comments.data) {
                        if (typeof ids.from !== 'undefined') {
                            let id_tmp = uuidv4();
                            //console.log('\n\t' + 'commentid ' + ids.id + ', username ' + (ids.from ? ids.from.name : 'Null') + ', userid ' + (ids.from ? ids.from.id : 'Null, mess ' + ids.message));
                            await checkUser(id_tmp, ids.from)
                                .then(function (rid, ruser) {
                                    console.log(id.from);
                                    insert(rid, ids.from);
                                }).catch(function (rid) {
                                    console.log(rid);
                                });
                        }
                        if (typeof ids.comments !== 'undefined') {
                            for (id of ids.comments.data) {
                                if (typeof id.from !== 'undefined') {
                                    console.log('\n\t\t' + id.from.name + " " + id.from.id);
                                    let id_tmp2 = uuidv4();
                                    await checkUser(id_tmp2, id.from)
                                        .then(function (rid, ruser) {
                                            console.log(id.from);
                                            insert(rid, ids.from);
                                        }).catch(function (rid) {
                                            console.log(rid);
                                        });
                                }
                            }
                        }
                    }
                }
                console.log("=====================================================");
            }
        }
        console.log(user_array);
    });
});*/

/*router.get('/get-page-token', async function (req, res) {
    var getData = axios.create({
        baseURL: 'https://graph.facebook.com/v4.0/',
    });
    var data;
     await getData.get('/me', {
        params: {
            fields: 'accounts',
            access_token: 'EAABwzLixnjYBAMOpYSZAqAkaTEJ3bPYAU6LVWSgZBXoscrYnIgjVZB8N4SbhjcgPZCZCEd1CwC8erSoLOAXEv5wYy5gccvBQ4lgavtPRo38ZB4IXmg3euRN6NqmSXUXrVWZBf19dde3DPYZAiZCV9cmeAFgcMBaad7VUMZCqZCZBlPCYY1gby1uXthlF'
        },
    })
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            data = response.data;
        })
        .catch(function (error) {
            console.log(error);
        });

    res.render('layout/main', {
        title: 'test',
        data: data
    })
});*/

module.exports = router;
