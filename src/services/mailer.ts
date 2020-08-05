import axios from "axios";

export class Mailer {
    /**
     * send an email
     * @param from 
     * @param body 
     */
    public static async send(from: string, body: string): Promise<{ status: boolean }> {
        let defered = new Promise<{ status: boolean }>(async (resolve, reject) => {

            let bodyFormData = new FormData();
            bodyFormData.set('from', from);
            bodyFormData.set('body', body);

            try {
                await axios.post("/mail/",
                    bodyFormData,
                    {
                        headers: {
                            "Content-type": "multipart/form-data"
                        }
                    })

                resolve({ status: true });

            } catch (err) {
                console.log(err);
                reject({ status: false });
            }

        });

        return defered;
    };
}