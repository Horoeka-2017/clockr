import React from 'react'
import DropboxChooser from 'react-dropbox-chooser'

export default function newTimeLocation(number) {
    return (
        <div>
            <table border="0" width="200" cellspacing="0" cellpadding="3">
                <form name="where">
                    <tr>
                        <td width="100%">
                            <select name="city" size="1" onchange="updateclock(this);">
                                <option value="" selected>Local time</option>
                                <option value="0">London GMT</option>
                                <option value="7">Bangkok</option>
                                <option value="-8">San Francisco</option>
                                <option value="-5">New York</option>
                            </select>
                        </td>
                    </tr>
                    </form>
                    </table>
                    </div>
                            )
}
