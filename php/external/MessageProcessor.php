<?php
/**
 * Created by PhpStorm.
 * User: daniil
 * Date: 21.10.16
 * Time: 13:01
 */

namespace php\external;

use php\interfaces\MessageProcessorInterface;

/**
 * Class Message
 *
 * @package php
 */
class MessageProcessor implements MessageProcessorInterface
{
    /** @inheritdoc */
    public function text($message)
    {
        return $message;
    }

    /** @inheritdoc */
    public function system($message, $room, User $sender)
    {
        return [false, []];
    }

    /** @inheritdoc */
    public function event($event, $room, User $sender)
    {
        return [false, []];
    }
}