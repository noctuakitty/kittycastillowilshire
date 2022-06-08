import React from 'react';
import { NewcomersButton } from '../buttons/NewcomersButton';

function HomeCard() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card border-secondary mb-3">
                        <div className="card-header">
                            <h2 className="header-one">
                                Am I an Alcoholic?
                            </h2>
                        </div>
                        <div className="card-body">
                            <h4>
                                If you repeatedly drink more than you intend
                                or want to, if you get into trouble, or if you have
                                memory lapses when you drink, you may be an
                                alcoholic.
                                Only you can decide. No one in A.A. will tell
                                you whether you are or are not.
                            </h4>
                            <br></br>
                            <p>
                            What can I do if I am worried
                                about my drinking?
                            </p>
                            <p>
                                Seek help. Alcoholics Anonymous can help.
                            </p>
                            <p>
                            What is Alcoholics Anonymous?
                            </p>
                            <p>
                                
                                We are a Fellowship of men and women who
                                have lost the ability to control our drinking and
                                have found ourselves in various kinds of trouble
                                as a result of drinking. We attempt — most of us
                                successfully — to create a satisfying way of life
                                without alcohol. For this we find we need the help
                                and support of other alcoholics in A.A.
                            </p>
                            <h4>
                                For more questions answered by AA intergroup, here is a newcomer pamphlet
                            </h4>
                            <NewcomersButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCard;