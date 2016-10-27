<?php
/**
 * Created by PhpStorm.
 * User: daniil
 * Date: 25.10.16
 * Time: 16:47
 */

namespace chat\interfaces;

use chat\external\Message;

/**
 * Interface MessageInterface
 * @package chat\interfaces
 */
interface MessageInterface
{
    const TYPE_TEXT = 'text';
    const TYPE_EVENT = 'event';
    const TYPE_SYSTEM = 'system';

    const CONTAINER = 'message';

    /**
     * @return bool
     */
    public function save();

    /**
     * @param int $sender_id
     * @param int $recipient_id
     * @param int $period
     *
     * @return Message[]
     */
    public static function getMessageHistoryByPeriod($sender_id, $recipient_id, $period);

    /**
     * @param int $sender_id
     * @param int $recipient_id
     * @param string $text
     * @param array $params
     *
     * @return bool
     */
    public static function addMessage($sender_id, $recipient_id, $text, $params);
}